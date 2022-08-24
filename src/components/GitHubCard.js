import { Card } from 'react-bootstrap'

export default function GitHubCard () {
    return (
        <Card>
            <Card.Img style={{borderRadius: '50%', width: '30vw'}} src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/289595442_6007540519261753_8905499865140227128_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aAr4Nepd_tkAX8zgYyX&_nc_ht=scontent-atl3-2.xx&oh=00_AT8QsiYyw87lZmLgS00iyRP4DnZ2wklyX201mcAvfkSqQw&oe=630C7127`}/>
            <Card.Body>
                <Card.Title><a class='link' href='https://github.com/lxMZK'><small>github.com/ </small>lxMZK</a></Card.Title>
                <Card.Text>
                    Hi I'm Alex! I'm an up and coming web dev just looking for a place to start!
                </Card.Text>
            </Card.Body>
        </Card>
    )
}