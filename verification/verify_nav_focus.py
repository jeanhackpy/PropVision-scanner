from playwright.sync_api import sync_playwright, expect

def verify_nav_focus():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 390, 'height': 844})
        page = context.new_page()
        page.goto("http://localhost:3000")

        # Click Compris !
        page.get_by_text("Compris !").click()

        # Tab many times to get to the bottom nav
        for _ in range(5):
            page.keyboard.press("Tab")
            page.wait_for_timeout(100)

        # Take screenshot
        page.screenshot(path="verification/nav_focus.png")

        browser.close()

if __name__ == "__main__":
    verify_nav_focus()
