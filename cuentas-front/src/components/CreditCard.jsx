export default function CreditCard({ name, number, people, date }) {
    return (
        <>
            <div className="credit-card">
                <h5>{name}</h5>
                <div className="credit-card-number">{number}</div>
                <div className="d-flex justify-content-between">
                    <span>{people}</span>
                    <span>{date}</span>
                </div>
            </div>
            </>
            )
}