class Person {
  //ts: 클래스에서 사용할 멤버변수 속성 정의해줘야함
  // ts : 변수의 접근범위도 지정가능(private:이 클래스안에서만 쓰겟다, public,,)
  private name: string;
  public age: number;
  readonly log: string; //읽기만 가능, 변경불가

  //ts: 타입도 정의해줘야함
  constructor(name: string, age: number) {
    this.name = name; 
    this.age = age;
  }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
  return <div>Hello World</div>
}

// 
new Vue({
  el: '',
  setup() {
    
  }
})