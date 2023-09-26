
class MedicalGuidelineAPI {
    constructor() {
        if (!MedicalGuidelineAPI.instance) {
            MedicalGuidelineAPI.instance = this;
        }
        return MedicalGuidelineAPI.instance;
    }

    async fetchMedicalGuideline() {
        try {
            const response = await fetch('http://localhost:3978/');
            return await response.json();
        } catch (error) {
            console.error("Failed fetching medical guideline:", error);
        }
    }
}

const medicalGuidelineAPI = new MedicalGuidelineAPI();
export default medicalGuidelineAPI;
