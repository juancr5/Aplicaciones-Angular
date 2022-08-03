
export interface Gif {
    id: string;
    title: string;
    url: string;
    images: Images;
}

export interface Images {
    original: FixedHeight;
    downsized:  The480_WStill;
    downsized_large: The480_WStill;
    downsized_medium: The480_WStill;
    downsized_small: DownsizedSmall;
}

export interface The480_WStill {
    height: string;
    width:  string;
    size:   string;
    url:    string;
}

export interface DownsizedSmall {
    height:   string;
    width:    string;
    mp4_size: string;
    mp4:      string;
}

export interface FixedHeight {
    height:    string;
    width:     string;
    size:      string;
    url:       string;
    mp4_size?: string;
    mp4?:      string;
    webp_size: string;
    webp:      string;
    frames?:   string;
    hash?:     string;
}



