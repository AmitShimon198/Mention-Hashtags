import medicalGuidelineAPI from './api';

class MedicalGuidelineService {
  constructor(api) {
    if (MedicalGuidelineService.instance) {
      return MedicalGuidelineService.instance;
    }

    this.api = api;
    this.data = null; 
    MedicalGuidelineService.instance = this;
  }

  loadMedicalGuidelineOptions() {
    if (!this.data) {
      this.data = this.api.fetchMedicalGuideline();
    }
    return this.data;
  }
}

const medicalGuidelineService = new MedicalGuidelineService(medicalGuidelineAPI);
export default medicalGuidelineService;


function collectProductIds(step, resultMap) {
    if (!step || !step.products) return;
    for (const product of step.products) {
        if (product?.default) {
            resultMap.add(product.productId);
        }      
        if (product.steps?.length) {
            for (const subStep of product.steps) {
                if (subStep?.isRequired) {
                    collectProductIds(subStep, resultMap);
                }
            }
        }
    }
}

function collectAllProductIdsFromSteps(steps) {
    const resultMap = new Set(); 
    if (!steps) return Array.from(resultMap); 
    for (const step of steps) {
        if (step?.isRequired) {
            collectProductIds(step, resultMap);
        }
    }
    return Array.from(resultMap);
}

// Usage:
// const result = collectAllProductIdsFromSteps(medicalGuidelineTemplate.steps);

