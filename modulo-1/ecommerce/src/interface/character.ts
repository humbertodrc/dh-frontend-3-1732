export interface Characters {
	amiibo: Character[];
}

export interface Character {
	amiiboSeries: string;
	character:    string;
	gameSeries:   string;
	head:         string;
	image:        string;
	name:         string;
	release:      Release;
	tail:         string;
	type:         string;
}

export interface Release {
	au: Date;
	eu: Date;
	jp: Date;
	na: Date;
}
