import { BRANDS_DATA } from "../Constant";



const simulateNetworkDelay = (delay = 500) => new Promise(res => setTimeout(res, delay));

export const getBrands = async () => {
  await simulateNetworkDelay();
  return BRANDS_DATA;
};

export const getBrandById = async (id) => {
  await simulateNetworkDelay();
  return BRANDS_DATA.find(brand => brand.id === id);
};

export const getModelById = async (brandId, modelId) => {
  await simulateNetworkDelay();
  const brand = await getBrandById(brandId);
  return brand?.models.find(model => model.id === modelId);
};

export const getPartsByModelId = async (brandId, modelId) => {
  await simulateNetworkDelay();
  const model = await getModelById(brandId, modelId);
  return model?.parts || [];
};

export const analyzePartImage = async (base64String, mimeType, brandName, modelName) => {
  await simulateNetworkDelay(2000); // Simulate longer AI processing time
  // Mock AI analysis: return a part name based on brand and model
  if (brandName === 'Renault' && modelName === 'Clio V') {
    return 'Disques de frein Avant';
  } else if (brandName === 'Renault' && modelName === 'Captur II') {
    return 'Radiateur';
  } else if (brandName === 'Peugeot' && modelName === '208 II') {
    return 'Plaquettes de frein';
  } else if (brandName === 'Peugeot' && modelName === '3008 II') {
    return "Kit d'embrayage";
  } else if (brandName === 'BMW' && modelName === 'Série 3 (G20)') {
    return 'Pompe à eau';
  }
  return null; // Simulate failure to identify
};