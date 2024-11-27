import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <>
        <div class="container">
  <div class="row content">
    <div class="col-lg-12"></div>
    <div class="col-lg-12">
      <h1>{err.status}<span class="small">{err.statusText}</span></h1>
      <h2>{err.data}</h2>
    </div>
  </div>
</div>
<div class="bg-img"></div>
        </>
    )
}

export default Error;