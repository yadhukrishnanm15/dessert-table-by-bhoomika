import requests
import json
import urllib.parse

def search_commons(query, limit=10):
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "list": "search",
        "srsearch": f"filetype:bitmap {query}",
        "srnamespace": 6, # File namespace
        "srlimit": limit,
        "format": "json"
    }
    response = requests.get(url, params=params).json()
    return response.get("query", {}).get("search", [])

def get_image_info(title):
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "titles": title,
        "prop": "imageinfo",
        "iiprop": "url|extmetadata|size",
        "format": "json"
    }
    res = requests.get(url, params=params).json()
    pages = res.get("query", {}).get("pages", {})
    for page_id, page in pages.items():
        if "imageinfo" in page:
            return page["imageinfo"][0]
    return None

def check_license_and_quality(info):
    if not info:
        return False, "No info"
    
    metadata = info.get("extmetadata", {})
    license_class = metadata.get("LicenseShortName", {}).get("value", "").upper()
    usage_terms = metadata.get("UsageTerms", {}).get("value", "")
    
    # Check width/height and quality
    width = info.get("width", 0)
    height = info.get("height", 0)
    if width < 800 or height < 800:
        return False, f"Low resolution: {width}x{height}"
        
    # Check license
    allowed_licenses = ["CC0", "PUBLIC DOMAIN", "PD", "CC-BY", "CC-BY-SA", "GFDL", "CC BY", "CC BY-SA", "FAL", "CC-BY-4.0", "CC BY-4.0", "CC BY-SA 4.0", "CC BY-SA-4.0", "CC BY-SA-3.0", "CC BY-3.0"]
    is_allowed = False
    for lic in allowed_licenses:
        if lic in license_class or lic in usage_terms.upper() or "CC0" in license_class or "PUBLIC DOMAIN" in license_class:
            is_allowed = True
            break
            
    # Explicitly reject NC or ND
    if "NC" in license_class or "ND" in license_class or "NON-COMMERCIAL" in usage_terms.upper() or "NO DERIVS" in usage_terms.upper():
        is_allowed = False
        
    if not is_allowed:
        return False, f"License not allowed: {license_class} | {usage_terms}"
        
    return True, "OK"

# Test search
if __name__ == "__main__":
    test_query = "tiramisu"
    results = search_commons(test_query, limit=5)
    print(f"Results for '{test_query}':")
    for r in results:
        title = r["title"]
        info = get_image_info(title)
        ok, reason = check_license_and_quality(info)
        print(f"- {title} | OK: {ok} | Reason: {reason}")
        if ok:
            metadata = info.get("extmetadata", {})
            print("  URL:", info.get("url"))
            print("  Desc:", info.get("descriptionurl"))
            print("  Artist:", metadata.get("Artist", {}).get("value", "Unknown"))
            print("  License:", metadata.get("LicenseShortName", {}).get("value", "Unknown"))
            print("  License URL:", metadata.get("LicenseUrl", {}).get("value", "Unknown"))
            print("  Usage Terms:", metadata.get("UsageTerms", {}).get("value", "Unknown"))
            print("-" * 40)
