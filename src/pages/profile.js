import React from "react";

const Profile = () => {

    return (
        <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
            {/* <h1 className="text-3xl">Profile here !!</h1> */}
            <div className="flex flex-col md:flex-row border border-black w-full md:w-[70%] rounded-[15px]">
                <div className="basis-[30%] bg-orange-500 rounded-l-[15px] flex justify-center items-center">
                    <img src="./images/profile.png " className="w-[200px] h-[200px] rounded-[50%]" alt="" />
                </div>
                <div className="basis-[70%] border-black">
                    <h1 className="text-3xl w-full text-left pl-4">Information</h1>
                    <div className="my-3 h-[2px] bg-black w-[80%] mx-auto rounded-[25px]"></div>
                    <div className="my-4 w-full flex">
                        <div className="basis-[50%] flex flex-col justify-center items-start pl-4">
                            <h1 className="text-xl">Name</h1>
                            <h1 className="text-xl font-bold">John Doe </h1>
                        </div>
                        <div className="basis-[50%] flex flex-col justify-center items-start pl-4">
                            <h1 className="text-xl">Address</h1>
                            <h1 className="text-xl">Apprt 123 Street example</h1>
                        </div>
                    </div>
                    <div className="my-4 w-full flex">
                        <div className="basis-[50%] flex flex-col justify-center items-start pl-4">
                            <h1 className="text-xl">Email</h1>
                            <h1 className="text-xl font-bold">username@email.com</h1>
                        </div>
                        <div className="basis-[50%] flex flex-col justify-center items-start pl-4">
                            <h1 className="text-xl">Phone</h1>
                            <h1 className="text-xl">+2126 12345678</h1>
                        </div>
                    </div>

                    <div className="my-3 h-[2px] bg-black w-[80%] mx-auto rounded-[25px]"></div>
                    <h1 className="text-3xl w-full text-left pl-4">My social Media</h1>
                    <div className="my-5 pl-4 flex">
                        <img src="https://img.icons8.com/?size=60&id=8818&format=png&color=000000" alt="" />
                        <img src="https://img.icons8.com/?size=60&id=phOKFKYpe00C&format=png&color=000000" alt="" />
                        <img src="https://img.icons8.com/?size=60&id=32309&format=png&color=000000" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;