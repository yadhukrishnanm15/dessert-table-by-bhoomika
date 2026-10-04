import requests

def test_api():
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "list": "search",
        "srsearch": "tiramisu",
        "format": "json"
    }
    headers = {
        "User-Agent": "MissionBakeryBot/1.0 (https://github.com/yamunday/missionbakery; contact@example.com)"
    }
    res = requests.get(url, params=params, headers=headers)
    print("Status code:", res.status_code)
    try:
        print(res.json().keys())
    except Exception as e:
        print("Error parsing json:", e)
        print("Response body preview:", res.text[:200])

if __name__ == "__main__":
    test_api()
