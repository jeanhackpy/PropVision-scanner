from playwright.sync_api import sync_playwright, expect
import sys

def verify_accessibility():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 390, 'height': 844})
        page = context.new_page()

        def handle_console(msg):
            print(f"CONSOLE: {msg.type}: {msg.text}")
        page.on("console", handle_console)
        page.on("pageerror", lambda exc: print(f"PAGE ERROR: {exc}"))

        try:
            page.goto("http://localhost:3000", wait_until="networkidle")

            # Print page title and some content to debug
            print(f"Page title: {page.title()}")
            print(f"Buttons found: {[btn.text_content() for btn in page.get_by_role('button').all()]}")

            # Wait for content to appear
            page.wait_for_timeout(2000)

            # Take a screenshot to see what's happening
            page.screenshot(path="verification/debug.png")

            compris_btn = page.get_by_role("button", name="Compris !")
            if compris_btn.is_visible():
                compris_btn.click()
            else:
                print("Compris ! button not found by name, trying by text")
                page.get_by_text("Compris !").click()

            # Check Header Menu Button
            menu_btn = page.get_by_role("button", name="Menu principal")
            expect(menu_btn).to_be_visible()

            # Check Simulated Map
            map_btn = page.get_by_role("button", name="Placer un marqueur sur la carte")
            expect(map_btn).to_be_visible()

            page.screenshot(path="verification/final_success.png")
            print("Accessibility verification successful!")

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_accessibility()
