function Card({children, className=""}) {
  return <div className={`border rounded-lg shadow p-4 ${className}`}>{children}</div>
}

function CardHeader({children, className=""}) {
    return <div className={`font-bold text-lg mb-2 ${className}`}>{children}</div>
}

function CardBody({children, className=""}) {
    return <div className={`text-gray-700 ${className}`}>{children}</div>
}

function CardFooter({children, className=""}) {
    return <div className={`mt-4 text-sm text-gray-500 ${className}`}>{children}</div>
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card