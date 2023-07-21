import Card  from "./Card";
function Tours({tours,NotInterestedHandler}){
return(
<div className="cards">
    {
    tours.map((tour)=>{
        return <Card key={tour.id} {...tour} NotInterestedHandler={NotInterestedHandler}></Card>  
    })
} 
</div>
);
}
export default Tours;