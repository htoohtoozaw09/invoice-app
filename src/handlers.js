import { colorDefine, colorPicker, productSidebar } from "./selectors";

export const manageInventoryBtnHandler = () => {
    productSidebar.classList.remove('translate-x-full'); 
    productSidebar.classList.add('duration-300'); 

}

export const closeSidebarBtnHandler = () => {
    console.log(productSidebar.classList.add('translate-x-full')); 
}

export const colorPickerHandler = () => {
    console.log(colorPicker.value);
    colorDefine.style.backgroundColor = colorPicker.value;
}

export const printRecordHandler = () => {
    window.print();
}