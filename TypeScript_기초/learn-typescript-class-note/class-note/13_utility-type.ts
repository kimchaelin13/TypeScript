interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ..
}

// interface ProductDetail {
//   id: number; 
//   name: string; 
//   price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
// 유틸리티 타입 장점; one of them : "pick"
// 프로덕트의 id, name, price를 뽑은 값이 쇼핑아이템이다. 기존에 있는 타입을 이용해서 원하는 방향으로 바꿈(타입을 불필요하게 안바꿔도되는 장점)
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
// partial 썼을때, product의 속성을 전부 optional처리 할 수 있다. 모든 속성을 다 옵셔널하게하면 다 넣어도되고 마음대로 해도됨
function updateProductItem(productItem: Partial<Product>) {
  
}

// 4. 유틸리티 타입 구현하기 - Partial
// 유저프로필 인타페이스 정의
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }
// #1
// 유저프로필 인터페이스 이용 -> 위쪽 특정 인터페이스 속성으로 그대로 적용가능
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2(#1 을 줄여나가기,mapped type)
type UserProfileUpdate = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}
type UserProfileKeys = keyof UserProfile

// #3(#2를 줄이기)
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// #4(파셜 구현체)
type Subset<T> = {
  [p in keyof T]?: T[p]
}
