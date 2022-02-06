import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import MyImage from '../../assets/nerolac-pearls-500x500.jpg';

const UpdateStock = () => {
    return (
        <div className="update-stock">
            <div className="container-fluid">
                    <div className="stock-content">
                        <label className="stock-topic">Items Stock Handling</label>
                        <Card className="stock-card">
                            <Card.Header>Update Stock</Card.Header>
                            <Card.Body>
                                <Row className="scan-btn-row">
                                    <div>
                                        <Button className="scan-btn stock-btn" variant="outline-primary">Scan Code</Button>
                                    </div>
                                </Row>
                                <form className="stock-update-form">
                                    <Row>
                                        <Col>
                                            <p className="field-title">Category</p>
                                            <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                            <datalist id="categoryList">
                                                <option value="pen">Paint</option>
                                                <option value="pencil">Pencil</option>
                                                <option value="paper">Paper</option>
                                            </datalist>
                                        </Col>
                                        <Col>
                                            <p className="field-title">Brand</p>
                                            <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                            <datalist id="categoryList">
                                                <option value="pen">Pen</option>
                                                <option value="pencil">Pencil</option>
                                                <option value="paper">Paper</option>
                                            </datalist>
                                        </Col>
                                        <Col>
                                            <p className="field-title">Item No</p>
                                            <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                            <datalist id="categoryList">
                                                <option value="pen">Pen</option>
                                                <option value="pencil">Pencil</option>
                                                <option value="paper">Paper</option>
                                            </datalist>
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col md="8">
                                            <p className="field-title">Item Name</p>
                                            <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                            <datalist id="categoryList">
                                                <option value="pen">Pen</option>
                                                <option value="pencil">Pencil</option>
                                                <option value="paper">Paper</option>
                                            </datalist>
                                        </Col>
                                        <Col>
                                            <p className="field-title">Unit</p>
                                            <input type="text" name="category" list="unitList" className="form-control dropdown" />
                                            <datalist id="unitList">
                                                <option value="kg">Kilogram</option>
                                                <option value="l">Liter</option>
                                                <option value="m">Meter</option>
                                            </datalist>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="field-title">New Item Count</p>
                                            <input type="text" name="category" className="form-control dropdown" />
                                        </Col>
                                        <Col>
                                            <p className="field-title">Company Barcode</p>
                                            <input type="text" name="category" className="form-control dropdown" />
                                        </Col>
                                        <Col>
                                            <p className="field-title">Buying Price</p>
                                            <input type="text" name="category" className="form-control dropdown" />
                                        </Col>
                                        <Col>
                                            <p className="field-title">Selling Price</p>
                                            <input type="text" name="category" className="form-control dropdown" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="field-title">Image</p>
                                            <Image thumbnail="true" src={MyImage} className="img-fluid stock-image"></Image>
                                        </Col>
                                    </Row>

                                </form>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Row className="btn-group">
                                    <Col>
                                        <Button className="stock-btn" variant="outline-success">Update Stock</Button>
                                        <Button className="stock-btn" variant="outline-danger">Clear</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
        </div>
    );
};

export { UpdateStock };