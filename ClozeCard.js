let ClozeCard = function(text, cloze) {
	if( this instanceof ClozeCard ) {
		this.fullText = text;
		this.cloze = cloze;
		if ( this.fullText.includes(this.cloze) ) {
			this.partial = this.fullText.replace(this.cloze, "...");
		}
		else{
			console.log('Error! "' + this.fullText + '" does not include "' + this.cloze + '".');
		}
	}
	else {
		return new ClozeCard(text, cloze);
	}
};

module.exports = ClozeCard;