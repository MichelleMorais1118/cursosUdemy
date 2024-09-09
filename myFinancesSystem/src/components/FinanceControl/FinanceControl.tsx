import "./FinanceControl.css";


const FinanceControl = (props: {
    datas: Array<{
        id: number,
        description: string;
    }>;
}) => {
    return (
    <div>
        {props.datas.map((data)=>(
            <div key = {data.id}>
                <h2>{data.description}</h2>
            </div>
            
        ))}
    </div>
    );
};

export default FinanceControl;