export interface Driver {
    driverId: String,
    firstName: String,
    secondName: String,
    dob: Date,
    nationality: String,
    number: Number,
    stats: Stats[]
}

interface Stats {
    braking: Number,
    cornering: Number,
    smoothness: Number,
    overtaking: Number,
    consistency: Number,
    adaptability: Number,
    fitness: Number,
    feedback: Number,
    focus: Number
}