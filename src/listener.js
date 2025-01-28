import { closeSidebarBtnHandler, colorPickerHandler, manageInventoryBtnHandler, printRecordHandler } from "./handlers";
import { addNewProductBtnHandler } from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./record";
import { addNewProductBtn, closeSidebarBtn, colorPicker, createRecordForm, manageInventoryBtn, recordGroup } from "./selectors";

const listener = () => {
    manageInventoryBtn.addEventListener('click',manageInventoryBtnHandler);
    closeSidebarBtn.addEventListener('click',closeSidebarBtnHandler);
    addNewProductBtn.addEventListener('click',addNewProductBtnHandler);
    createRecordForm.addEventListener('submit',createRecordFormHandler);
    // colorPicker.addEventListener('input',colorPickerHandler);
    recordGroup.addEventListener('click',recordGroupHandler);
    printRecord.addEventListener('click',printRecordHandler);
}

export default listener;