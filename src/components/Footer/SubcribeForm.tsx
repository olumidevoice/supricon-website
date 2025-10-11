import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const SubcribeForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        toast.success("Success!!!");
        setEmail("");
    };

    return (
        <div>
            <div className="mt-5">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!email) return;
                        handleSubmit();
                    }}
                >
                    <div className="relative ">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 text-sm py-3.5 bg-white outline-0 border rounded-xs border-black-100"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant={"primary"}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2  rounded-xs  text-white  px-5"
                        >
                            Subscribe
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubcribeForm;
