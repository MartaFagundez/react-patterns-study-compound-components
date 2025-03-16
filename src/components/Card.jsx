function Card({children}) {
  return <div className="border rounded-lg shadow p-4">{children}</div>
}

function CardHeader({children}) {
    return <div className="font-bold text-lg mb-2">{children}</div>
}

function CardBody({children}) {
    return <div className="text-gray-700">{children}</div>
}

function CardFooter({children}) {
    return <div className="mt-4 text-sm text-gray-500">{children}</div>
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card