const Label =   () => {
    const { htmlFor, text } = props;
    return (
        <label 
        htmlFor={htmlFor} className="block text-sm font-medium text-slate-700">
            {text}
        </label>
    );
    
};

export default Label;