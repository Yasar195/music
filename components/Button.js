const Button = () => {
    return (
        <div className="button">
            <p>Al recommendation</p>
            <style jsx>{`
                .button{
                    color: #0085FF;
                    padding: 10px;
                    box-shadow: 3px 3px 100px rgba(0, 133, 255, 0.4);
                    border-radius: 15px;
                }

                p{
                    font-size: 0.7rem;
                }
            `}</style>
        </div>
    )
}

export default Button