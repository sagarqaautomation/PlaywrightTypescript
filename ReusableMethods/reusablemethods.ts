import { expect, Locator } from "@playwright/test";


    // Check if an element is visible
    export async function checkElementIsVisible(locator: any,) {
        await expect(locator).toBeEnabled();
    }

    // Check if an element is enabled
    export async function checkElementIsEnabled(locator: Locator): Promise<void> {
        await expect(locator).toBeEnabled();
    }

    // Check if an element is disabled
    export async function checkElementIsDisabled(locator: Locator): Promise<void> {
        await expect(locator).toBeDisabled();
    }

    // Check if an element contains specific text
    export async function checkElementContainsText(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toHaveText(expectedText);
    }

    // Click an element
    export async function clickElement(locator: Locator): Promise<void> {
        await locator.click();
    }

    // Enter text into an input field
    export async function enterText(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    // Wait for an element to be visible
    export async function waitForElementToBeVisible(locator: Locator): Promise<void> {
        await locator.waitFor({ state: "visible" });
    }

    // Wait for an element to be hidden
    export async function waitForElementToBeHidden(locator: Locator): Promise<void> {
        await locator.waitFor({ state: "hidden" });
    }

    // Check if an element has a specific attribute value
    export async function checkElementHasAttribute(locator: Locator, attribute: string, value: string): Promise<void> {
        await expect(locator).toHaveAttribute(attribute, value);
    }

    // Hover over an element
    export async function hoverOverElement(locator: Locator): Promise<void> {
        await locator.hover();
    }

    // Check if an element is hidden
    export async function checkElementIsHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }

    // Check if an element is editable
    export async function checkElementIsEditable(locator: Locator): Promise<void> {
        await expect(locator).toBeEditable();
    }

    // Check if an element is focused
    export async function checkElementIsFocused(locator: Locator): Promise<void> {
        await expect(locator).toBeFocused();
    }

    // Select an option from a dropdown by value
    export async function selectDropdownOptionByValue(locator: Locator, value: string): Promise<void> {
        await locator.selectOption({ value });
    }

    // Select an option from a dropdown by label
    export async function selectDropdownOptionByLabel(locator: Locator, label: string): Promise<void> {
        await locator.selectOption({ label });
    }

    // Get the text content of an element
    export async function getElementText(locator: Locator): Promise<string> {
        const text = await locator.textContent();
        if (text === null) {
            throw new Error("Element text content is null");
        }
        return text;
    }

    // Get a list of elements matching a locator
    export async function getListOfElements(locator: Locator) {
        const text: string[] = await locator.allTextContents();
        if (text === null) {
            throw new Error("Element text content is null");
        }
        return text;
    }

    // Get the value of an input field
    export async function getInputValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    // Scroll to an element
    export async function scrollToElement(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
    }

    // Drag and drop an element to a target
    export async function dragAndDropElement(sourceLocator: Locator, targetLocator: Locator): Promise<void> {
        await sourceLocator.dragTo(targetLocator);
    }

    // Check if an element has a specific CSS class
    export async function checkElementHasClass(locator: Locator, className: string): Promise<void> {
        const hasClass = await locator.evaluate((el, className) => el.classList.contains(className), className);
        expect(hasClass).toBeTruthy();
    }

    // Take a screenshot of an element
    export async function takeElementScreenshot(locator: Locator, path: string): Promise<void> {
        await locator.screenshot({ path });
    }

    // Check if an element is checked (for checkboxes or radio buttons)
    export async function checkElementIsChecked(locator: Locator): Promise<void> {
        await expect(locator).toBeChecked();
    }

    // Uncheck a checkbox
    export async function uncheckCheckbox(locator: Locator): Promise<void> {
        await locator.uncheck();
    }

    // Check a checkbox
    export async function checkCheckbox(locator: Locator): Promise<void> {
        await locator.check();
    }

    // Type text into an input field (append text instead of replacing)
    export async function typeText(locator: Locator, text: string): Promise<void> {
        await locator.type(text);
    }

    // Clear text from an input field
    export async function clearText(locator: Locator): Promise<void> {
        await locator.fill('');
    }

    // Wait for an element to be attached to the DOM
    export async function waitForElementToBeAttached(locator: Locator): Promise<void> {
        await locator.waitFor({ state: "attached" });
    }

    // Wait for an element to be detached from the DOM
    export async function waitForElementToBeDetached(locator: Locator): Promise<void> {
        await locator.waitFor({ state: "detached" });
    }

    // Get the count of elements matching a locator
    export async function getElementCount(locator: Locator): Promise<number> {
        const count = await locator.count();
        return count;
    }

    // Check if an element is visible within a specific timeout
    export async function checkElementIsVisibleWithTimeout(locator: Locator, timeout: number): Promise<void> {
        await expect(locator).toBeVisible({ timeout });
    }

    // Check if an element has specific CSS styles
    export async function checkElementHasStyle(locator: Locator, style: string, value: string): Promise<void> {
        const computedStyle = await locator.evaluate((el, style) => window.getComputedStyle(el)[style], style);
        expect(computedStyle).toBe(value);
    }