// Data Model interface defined as per the data structure in .json files

export interface CalenderDataModel{
    id: String;
    title: String;
    programId: String;
    programTitle: String;
    status: String;
    maturities: Array<MaturityModel>;
    milestones: Array<MilestoneModel>
}

export interface MaturityModel extends CommonModel{
    percentage: String;
}

export interface MilestoneModel extends CommonModel{
    date: String;
    options: Object
}

interface CommonModel{
    id: String;
    title: String;
    state: String;
}
