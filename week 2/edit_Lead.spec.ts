import { chromium, expect, test } from "@playwright/test";

test('Edit a lead', async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel("Username").fill("demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("text=CRM/SFA").click();
    await page.click("text=Create Lead");
    await page.locator("text=Find Leads").locator('nth=1').click();
    await page.locator("input[name='firstName']").locator('nth=2').fill("first_name_1");
    await page.getByRole('button', { name: 'Find Leads' }).click()
    await page.locator('tbody td a.linktext').nth(0).click()
    page.getByText('Edit', { exact: true }).click();
    await page.waitForTimeout(5000);

    //Updating the company name
    const compName = page.locator("#updateLeadForm_companyName");
    compName.clear();
    compName.fill("name changed");

    //Updating the annual revenue
    const annRevenue = page.locator("#updateLeadForm_annualRevenue");
    annRevenue.clear();
    annRevenue.fill("300000");

    //Updating the department name
    const department = page.locator("#updateLeadForm_departmentName");
    department.clear();
    department.fill("HR");
    
    //Clicking on update button
    await page.locator("#updateLeadForm_description").fill("Lead is updated");
    await page.locator(".smallSubmit").first().click();

    //Asserting the updated values
    await expect(page.locator("#updateLeadForm_companyName")).toContainText('name changed');
    await expect(annRevenue).toContainText('300000');
    await expect(department).toContainText('HR');

})