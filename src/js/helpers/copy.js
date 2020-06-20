class CopyHelper {

    static copyToClipboard(element) {
        element.select();
        element.setSelectionRange(0, 99999);
    
        document.execCommand('copy');
    
        let tooltip = document.getElementById("myTooltip");
        tooltip.classList.remove('hide');
    }
}
