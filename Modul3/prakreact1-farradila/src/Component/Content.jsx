import React, { Component } from 'react';
import {Jumbotron, Container} from 'reactstrap';

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid m-2">
                    <div className="row">
                        <div className="col">
                            <Jumbotron fluid>
                                <Container>
                                    <h1>Hi!!</h1>
                                    <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </Container>
                            </Jumbotron>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 p-2">
                            <figure className="figure">
                                <img src="https://picsum.photos/seed/picsum/600/400" class="figure-img img-fluid rounded" alt="..." />
                                <figcaption class="figure-caption">A caption for the above image.</figcaption>
                            </figure>
                        </div>
                        <div className="col-md-8 bg-light p-2 pr-5">
                            <h3 className='featurette-heading text-left'>Main Content</h3>
                            <p className='text-justify'>Vero sit diam amet voluptua sea sadipscing ipsum rebum gubergren. Diam erat lorem et elitr et erat at erat amet. Accusam ut aliquyam dolores nonumy duo vero eirmod vero, justo rebum duo amet aliquyam vero, diam gubergren at rebum lorem dolor et gubergren ut erat. Amet et sit erat dolor.Ini adalah isi dari konten</p>
                            <p className='text-justify'>Sed accusam rebum accusam stet stet ea accusam aliquyam et dolore. Sit duo ea gubergren eirmod sed diam ipsum, et stet et eirmod aliquyam aliquyam ipsum dolor accusam, dolor lorem sadipscing ut at, nonumy sadipscing dolor vero dolor et invidunt labore est diam. Amet tempor vero dolor aliquyam eos et tempor diam. Sed consetetur sadipscing sanctus lorem ipsum. Diam lorem eirmod et kasd clita amet lorem. Diam aliquyam diam sit lorem dolore elitr invidunt et est. Eos ut rebum gubergren et sanctus rebum sanctus takimata voluptua. Rebum et ut gubergren rebum sadipscing ea amet diam et, vero consetetur voluptua takimata.</p>
                            <p className='text-justify'>Justo dolores vero diam est consetetur diam dolor ipsum. Et voluptua ut accusam stet. Vero sit kasd duo sit justo amet lorem sed, ipsum tempor kasd ipsum gubergren et tempor elitr rebum. Nonumy stet gubergren clita sea labore, sit diam et sadipscing stet est lorem. Lorem magna dolores gubergren stet.</p>
                            <p className="text-justify">Ipsum lorem magna sed lorem gubergren sea. Aliquyam accusam dolores nonumy ipsum amet ipsum diam, lorem erat tempor sed ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
