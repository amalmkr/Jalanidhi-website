import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";

function Contacts(){
    const members=[
        {
            id:1,
            name:"NAME-1",
            role:"role-1",
            image:person1,
            number:1234567890

        },
        {
            id:2,
            name:"NAME-2",
            role:"role-2",
            image:person2,
            number:1234567890


        },
        {
            id:3,
            name:"NAME-3",
            role:"role-3",
            image:person3,
            number:1234567890


        },

    ]
    return(
        <>
        <section className="p-16 bg-gradient-to-b from-white to-blue-50" id="contacts">
        <h2 className="text-center text-xl md:text-4xl text-blue-900 font-bold">വിവരവിനിമയം</h2>
        <h4 className="text-center mt-5 text-blue-700 font-bold text-xl">ഞങ്ങളുമായി ബന്ധപ്പെടുക</h4>
            <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member)=>(
                    <div key={member.id} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 "> 
                        <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full object-cover mx-auto"/>
                        <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                        <p className="text-blue-700">{member.number}</p>
                    </div>
                ))}
            
        </div>
        </section>
        </>
    )
}



export default Contacts;