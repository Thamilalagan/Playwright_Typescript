import { chromium, expect, test } from "@playwright/test";

test("To create a lead", async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel("Username").fill("demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("text=CRM/SFA").click();
    await page.click("text=Create Lead");
    await page.locator("#createLeadForm_companyName").fill("company_test_1");
    await page.fill("#createLeadForm_firstName", "first_name_1");
    await page.fill("input[id='createLeadForm_lastName']", "last_name_1");
    await page.fill("#createLeadForm_personalTitle", "Hi");
    await page.fill("#createLeadForm_generalProfTitle", "Ms");
    await page.fill("#createLeadForm_annualRevenue", "200000");
    await page.fill("#createLeadForm_departmentName", "Sales");
    await page.fill("#createLeadForm_primaryPhoneNumber", "9230913492");
    await page.click("[class='smallSubmit']");

    await page.waitForTimeout(5000);

    //Using auto retrying assertions

    await expect(page.locator('#viewLead_companyName_sp')).toContainText('company_test_1');
    await expect(page.locator('#viewLead_firstName_sp')).toContainText('first_name_1');
    await expect(page.locator('#viewLead_lastName_sp')).toContainText('last_name_1');
    await expect(page.locator('#viewLead_statusId_sp')).toContainText('Assigned');
    await page.waitForTimeout(3000);
    
    //Using non auto retrying assertions
    //expect('#viewLead_companyName_sp').toContain('company_test_1');


    
});