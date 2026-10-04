import requests
import json
import re

subjects = {
    "tiramisu": ["tiramisu", "tiramisu slice"],
    "blueberry cupcakes": ["blueberry cupcake", "blueberry cupcakes"],
    "mini cupcakes": ["mini cupcake", "mini cupcakes", "cupcakes bunch"],
    "vanilla cupcakes": ["vanilla cupcake", "vanilla cupcakes"],
    "lemon blueberry layer/celebration cake": ["lemon blueberry cake", "blueberry cake", "lemon cake"],
    "coffee walnut loaf/cake": ["coffee walnut cake", "coffee walnut loaf", "coffee cake walnut", "walnut cake"],
    "banana bread/cake": ["banana bread", "banana cake"],
    "orange cake/loaf": ["orange cake", "orange loaf"],
    "chocolate loaf/cake": ["chocolate loaf cake", "chocolate loaf", "chocolate cake slice", "chocolate cake"],
    "blueberry crumble/cake": ["blueberry crumble", "blueberry cake crumble", "berry crumble"],
    "Indian mithai/fusion cake": ["motichoor cake", "laddu cake", "fusion cake", "motichoor", "ladoo", "mithai"],
    "gulab jamun": ["gulab jamun", "gulabjamun"]
}

headers = {
    "User-Agent": "MissionBakeryBot/1.0 (https://github.com/yamunday/missionbakery; contact@example.com)"
}

def search_commons(query, limit=15):
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "list": "search",
        "srsearch": f"filetype:bitmap {query}",
        "srnamespace": 6,
        "srlimit": limit,
        "format": "json"
    }
    try:
        res = requests.get(url, params=params, headers=headers).json()
        return res.get("query", {}).get("search", [])
    except Exception as e:
        print(f"Error searching for {query}: {e}")
        return []

def get_image_info(title):
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "titles": title,
        "prop": "imageinfo",
        "iiprop": "url|extmetadata|size",
        "format": "json"
    }
    try:
        res = requests.get(url, params=params, headers=headers).json()
        pages = res.get("query", {}).get("pages", {})
        for page_id, page in pages.items():
            if "imageinfo" in page:
                return page["imageinfo"][0]
    except Exception as e:
        print(f"Error fetching info for {title}: {e}")
    return None

def check_license_and_quality(info):
    if not info:
        return False, "No info"
    
    metadata = info.get("extmetadata", {})
    license_class = metadata.get("LicenseShortName", {}).get("value", "").upper()
    usage_terms = metadata.get("UsageTerms", {}).get("value", "")
    
    width = info.get("width", 0)
    height = info.get("height", 0)
    if width < 600 or height < 600:
        return False, f"Low resolution: {width}x{height}"
        
    allowed_licenses = ["CC0", "PUBLIC DOMAIN", "PD", "CC-BY", "CC-BY-SA", "GFDL", "CC BY", "CC BY-SA", "FAL", "CC-BY-4.0", "CC BY-4.0", "CC BY-SA 4.0", "CC BY-SA-4.0", "CC BY-SA-3.0", "CC BY-3.0"]
    is_allowed = False
    for lic in allowed_licenses:
        if lic in license_class or lic in usage_terms.upper() or "CC0" in license_class or "PUBLIC DOMAIN" in license_class:
            is_allowed = True
            break
            
    if "NC" in license_class or "ND" in license_class or "NON-COMMERCIAL" in usage_terms.upper() or "NO DERIVS" in usage_terms.upper():
        is_allowed = False
        
    if not is_allowed:
        return False, f"License not allowed: {license_class} | {usage_terms}"
        
    # Check if title suggests watermarked or low quality
    title = info.get("descriptionurl", "")
    return True, "OK"

results_summary = {}

for subject, queries in subjects.items():
    print(f"Searching for subject: {subject}...")
    found = False
    for query in queries:
        search_results = search_commons(query, limit=12)
        for r in search_results:
            title = r["title"]
            info = get_image_info(title)
            ok, reason = check_license_and_quality(info)
            if ok:
                metadata = info.get("extmetadata", {})
                artist = metadata.get("Artist", {}).get("value", "Unknown")
                # Remove HTML tags from artist if any
                artist_clean = re.sub('<[^<]+?>', '', artist).strip()
                
                results_summary[subject] = {
                    "title": title,
                    "url": info.get("url"),
                    "descriptionurl": info.get("descriptionurl"),
                    "artist": artist_clean,
                    "license": metadata.get("LicenseShortName", {}).get("value", "Unknown"),
                    "license_url": metadata.get("LicenseUrl", {}).get("value", "N/A"),
                    "usage_terms": metadata.get("UsageTerms", {}).get("value", "Unknown"),
                    "resolution": f"{info.get('width')}x{info.get('height')}"
                }
                found = True
                break
        if found:
            break
    if not found:
        results_summary[subject] = None

# Print markdown block
print("\n=== MARKDOWN OUTPUT ===")
for sub, info in results_summary.items():
    print(f"### {sub}")
    if info:
        print(f"- **File Title**: {info['title']}")
        print(f"- **Original Image URL**: {info['url']}")
        print(f"- **Description URL**: {info['descriptionurl']}")
        print(f"- **Artist/Credit**: {info['artist']}")
        print(f"- **License**: {info['license']}")
        print(f"- **License URL**: {info['license_url']}")
        print(f"- **Usage Terms**: {info['usage_terms']}")
        print(f"- **Resolution**: {info['resolution']}")
    else:
        print("- *No suitable match found.*")
    print()
