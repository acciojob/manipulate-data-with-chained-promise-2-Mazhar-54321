//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	let div = document.getElementById("output") 
	function promise1(){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve([1,2,3,4])
			},3000)
		})
	}
	function promise2(arr=[]){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(arr.filter((el)=>el%2===0))
			},1000)
		})
	}
	function promise3(arr=[]){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(arr.map((el)=>el*2))
			},2000)
		})
	}
	let promise = promise1().then((res)=>{
		//div.textContent =String(res)
		return promise2(res)
	}).
		then((res)=>{
			div.textContent =String(res)
			return promise3(res)})
}).
		then((res)=>{
			div.textContent =String(res)
})

