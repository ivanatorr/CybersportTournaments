import { React, useState, useEffect } from 'react';
import 'C:/Users/ivana/tournaments/src/App.css';
import Fuse from 'fuse.js';
import ContentItem from './Components/ContentItem'
import FormForTournament from './Components/FormForTournament'

import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownFilter from './Components/DropdownFilter'
import { Card, ListGroup, ListGroupItem, Row, Col, Container, CardGroup } from "react-bootstrap";



function ApiGet() {




  const [query, updateQuery] = useState('');
  const [items, updateItems] = useState([]);
  const [searchParam] = useState(["status", "title"]);
  const [filterParam, setFilterParam] = useState(["All"]);


  useEffect(() => {
    gettingTournament();
    search(items);
  }, []);

  const gettingTournament = async () => {

    const apiUrl = fetch('https://cybertournaments.herokuapp.com/dota/?format=json')
      .then(data => data.json())
      .then(data => updateItems(data))
  };

  const fuse = new Fuse(items, {
    keys: [
      'title',
      'status',
      'reward.count'
    ],
    includeScore: true
  });


  const results = fuse.search(query);
  console.log('results', results)
  const tournamentResults = results.map(tournament => tournament.item);

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
    console.log(currentTarget.value)
  }
  function search(items) {
    return items.filter((item) => {

      if (item.status == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  }


  return (
    <>
    <DropdownFilter dropDownMethod={setFilterParam}/>
      <FormForTournament tournamentMethod={onSearch} />
      {/* <Container>
      <Row>
        <Col xs={6} md={4}> */}
        <CardGroup>
            {search(items).map(tournament => {
              const { title, status, reward, links, startTime } = tournament;
              return (
          
                  <Row className="mx-auto my-2">
                    <Col >
                  <Card style={{ width: '20rem', 
                                height: '48rem'}} key={title}
                                >
                    <a href={links.tournament}>
                      <Card.Img style={{ width: '100%', 
                                height: '15rem'}}
                                variant="top" src={links.image} />
                    </a>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{status}</ListGroupItem>
                      <ListGroupItem>{reward.count}</ListGroupItem>
                      <ListGroupItem>{startTime}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href={links.tournament}>Перейти на сайт турнира</Card.Link>
                    </Card.Body>
                  </Card>
                  </Col>
                  </Row>
                  
             
              )
            })}
          </CardGroup>
        {/* </Col>
      </Row>
      </Container> */}
    </>
  );
}

export default ApiGet;