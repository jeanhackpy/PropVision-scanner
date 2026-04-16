from playwright.sync_api import sync_playwright, expect

def verify_handle_focus():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 390, 'height': 844})
        page = context.new_page()
        page.goto("http://localhost:3000")

        # Click Compris !
        page.get_by_text("Compris !").click()

        # Click map to open bottom sheet
        page.get_by_role("button", name="Placer un marqueur sur la carte").click()

        # Tab to handle
        page.keyboard.press("Tab") # Header Menu
        page.keyboard.press("Tab") # Map
        page.keyboard.press("Tab") # Bottom Sheet Handle

        # Wait a bit
        page.wait_for_timeout(500)

        # Take screenshot
        page.screenshot(path="verification/handle_focus_ring.png")

        browser.close()

if __name__ == "__main__":
    verify_handle_focus()
