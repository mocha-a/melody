const STORAGE_KEY = 'RECENT_VIEWED_PRODUCT';
const MAX_ITEMS = 10;

export function useRecentViewed() {
  const getProducts = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  };

  const saveProduct = (product) => {
    let products = getProducts();

    // 중복 제거
    products = products.filter(p => p.id !== product.id);

    // 맨 앞에 추가
    products.unshift(product);

    // 10개 유지
    if (products.length > MAX_ITEMS) {
      products = products.slice(0, MAX_ITEMS);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  };

  return { getProducts, saveProduct };
}