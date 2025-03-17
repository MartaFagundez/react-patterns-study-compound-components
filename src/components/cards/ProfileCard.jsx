import Card from "./Card"

function ProfileCard({name, bio, avatar, social}) {
  return (
    <Card className="max-w-sm text-center">
        <Card.Header>
            <img src={avatar} alt={name} className="w-24 h-24 mx-auto rounded-full border-4 border-gray-200" />
            <h2 className="mt-2">{name}</h2>
        </Card.Header>
        <Card.Body>
            <p>{bio}</p>
        </Card.Body>
        <Card.Footer>
            <div className="flex justify-center gap-4">
                {
                    social.map((link, index) => (
                        <a key={index} href={link.url} className="text-blue-500 hover:underline">
                            {link.platform}
                        </a>
                    ))
                }
            </div>
        </Card.Footer>
    </Card>
  )
}
export default ProfileCard;