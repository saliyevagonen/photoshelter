class HoversPage {
    get figureElements() {
        return $$('.figure');
    }

    hoverOverFigure(index) {
        const figure = this.figureElements[index];
        figure.moveTo();
    }

    getProfileLink(index) {
        return this.figureElements[index].$('a');
    }

    async getProfileLinkHref(index) {
        const link = this.getProfileLink(index);
        return await link.getAttribute('href');
    }
}

module.exports = new HoversPage();