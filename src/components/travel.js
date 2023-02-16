import mountainPic from '../assets/pictures/mountain.jpg'

export default function Travel() {



    // function searchNationalPark() {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-API-Key': '8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd'
    //         }};
    //     fetch('https://developer.nps.gov/api/v1/parks?limit=50&start=0"', options)
    //         .then(response => response.json())
    //         .then(response => {
    //             // let result = response.data.reduce((arr, info) => arr.concat(info), []).map(obj => obj.title); // get data title
    
    //             // console.log(result);
    //             console.log(response.data)
                
    //         })
    //         .catch(err => console.error(err));
    // }
    // searchNationalPark();
    
    return (
        <section className='travel-main'>
            <img src={mountainPic} alt="" />
        </section>
    );
}