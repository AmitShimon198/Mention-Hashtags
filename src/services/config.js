class MedicalGuideline {
    constructor() {
        if (MedicalGuideline.instance) {
            return MedicalGuideline.instance;
        }
        this.data = null;
        MedicalGuideline.instance = this;
    }

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const medicalGuideline = new MedicalGuideline();
export default medicalGuideline;
