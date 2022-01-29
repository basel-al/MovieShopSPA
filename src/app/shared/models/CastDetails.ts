export interface CastDetails {
    id:          number;
    name:        string;
    gender:      string;
    tmdbUrl:     string;
    profilePath: string;
    movieTitle: MovieTitle[];
}

export interface MovieTitle {
    id:        number;
    title:     string;
    posterUrl: string;
    releaseDate: string;
}
