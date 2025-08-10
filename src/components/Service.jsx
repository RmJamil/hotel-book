const Service = ({one}) => {
    console.log(one);
   
    return (
        <div>
            <div>
                
                <div className=" bg-sky-100 lg:h-[650px] lg:m-4 lg:p-5 p-3 rounded-2xl">
                     <h1 className="text-2xl text-center text-sky-400 font-bold lg:my-6">{one.service}</h1>
  <div className=" flex-col lg:flex-row-reverse">
    <img
      src={one.image}
      className="w-full h-[350px] rounded-lg shadow-2xl mx-auto "
    />
    <div>
     
      <p className="py-6 italic">
       {one.description}
      </p>
    
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Service;