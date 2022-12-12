# find-something-special
<h3>프로젝트 내용</h3>
<p>버튼을 클릭 시, 그림이 다른 곳으로 이동합니다.</p>
<p>이동에 대한 부분을 UI로 구현하기 위해서 Scroll event를 활용했고,<br>
scroll은 scrollTOP, scrollHeight, clientHeight의 좌표 값을 반영하였습니다. <br>
마지막으로 무분별한 scroll event를 방지하고자, <br> 
throttle 함수를 활용해서 100ms delay를 적용했습니다.
</p>


![Dec-12-2022 18-32-32](https://user-images.githubusercontent.com/104504666/207021659-8b8b6f97-90cf-44ff-9415-fc35a283a7f9.gif)
