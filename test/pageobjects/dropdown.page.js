class DropdownPage {

    get dropdownPageHeader() {
        return $('h3=Dropdown List');
    }
    get dropdown() {
        return $('#dropdown');
    }

    get selectedOption() {
        return $('[selected="selected"]');
    }

    dropdownOptions() {
        return $$('#dropdown option');
    }

}

module.exports = new DropdownPage();