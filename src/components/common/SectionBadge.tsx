const SectionBadge = ({ text }: { text: string }) => {
    return (
        <div>
            <div className="text-sm text-blue-300 font-semibold uppercase flex items-center gap-3">
                <h3>{text} </h3>
                <span className="block w-[10rem] h-[0.125rem] bg-blue-300"></span>
            </div>
        </div>
    );
};

export default SectionBadge;
