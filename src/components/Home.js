import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import i18n from 'i18n-react';
import SVGInline from "react-svg-inline";
import ChangeLang from './ChangeLanguage';

export default class Home extends Component {
    render() {
        return (
            <div className="wow animated fadeIn wrapper" data-wow-duration="1.5s">
                <div className="index-header">
                    <div className="wow animated bounceInDown logo" data-wow-duration="2s">
                        <SVGInline
                            svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 138.37 162.25\">\n" +
                            "<g>\n" +
                            "    <path class=\"logo-sd-1\" d=\"M34.87,126.63\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"60.76\" y=\"52.33\" width=\"0.17\" height=\"109.92\"/>\n" +
                            "    <path class=\"logo-sd-2\" d=\"M77.52,24.69l-16.82,11a26.1,26.1,0,0,0-20.12-9.23,12.16,12.16,0,0,0-7.31,2.06q-2.84,2.06-2.84,4.64a7.28,7.28,0,0,0,2,4.88q2.76,3.07,16.64,13.18Q62.1,60.54,64.86,63q6.9,6,9.78,11.47a25.29,25.29,0,0,1,2.88,12q0,12.62-10.14,20.85T40.93,115.5q-12.74,0-22.19-5.37c-6.3-3.58-10.69-8.76-10.69-17.43l13.57-9.35q8.6,13.6,19.8,13.6A16.11,16.11,0,0,0,51.26,94q4-2.93,4-6.76a10.74,10.74,0,0,0-3-7q-3-3.49-13.23-10.67Q19.51,55.94,13.83,48.51T8.15,33.69Q8.15,23,17.6,15.39T40.93,7.75a41.7,41.7,0,0,1,17,3.56A68.92,68.92,0,0,1,77.52,24.69Z\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"42.04\" y=\"-34.49\" width=\"0.17\" height=\"84.25\" transform=\"translate(34.49 49.76) rotate(-90)\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"38.27\" y=\"77.03\" width=\"0.17\" height=\"76.71\" transform=\"translate(-77.03 153.74) rotate(-90)\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"95.16\" y=\"111.54\" width=\"0.17\" height=\"86.25\" transform=\"translate(-59.42 249.91) rotate(-90)\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"84.53\" y=\"6.79\" width=\"0.17\" height=\"107.5\" transform=\"translate(24.08 145.16) rotate(-90)\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"130.72\" y=\"52.33\" width=\"0.17\" height=\"109.92\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"77.94\" y=\"34.77\" width=\"0.17\" height=\"99.21\" transform=\"translate(46.34 -26.09) rotate(26.76)\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"56.35\" y=\"36.77\" width=\"0.17\" height=\"99.21\" transform=\"translate(43.85 -16.03) rotate(26.15)\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"8.15\" y=\"0.13\" width=\"0.18\" height=\"123.25\"/>\n" +
                            "    <rect class=\"logo-sd-1\" x=\"77.45\" width=\"0.17\" height=\"162.25\"/>\n" +
                            "    <path class=\"logo-sd-3\" d=\"M73.37,57.81\"/>\n" +
                            "    <path class=\"logo-sd-4\" d=\"M42.38,115.55l26.89-55.1H61.7c-2.73-2.1-7-5.22-12.59-9.25C39.9,44.46,34.49,40,32.66,38a7,7,0,0,1-2-4.75,5.48,5.48,0,0,1,2.56-4.66,12.06,12.06,0,0,1,7.27-2.06c6.09,0,14.9,3.52,20.78,10.59L77.62,24.67c-6.24-6.28-14.55-10.93-19.91-13.31A41.32,41.32,0,0,0,40.79,7.8Q27,7.8,17.58,15.44c-6.27,5.09-9.43,11.19-9.41,18.31,0,5,1.89,9.9,5.65,14.82s12.12,12,25,21.1Q49,76.85,52,80.33a10.77,10.77,0,0,1,3,7q0,3.84-4,6.76A16,16,0,0,1,41.3,97Q30.15,97,21.59,83.4L8.08,92.75c0,8.67,4.36,13.85,10.63,17.43s13.63,5.37,22.08,5.37Z\"/>\n" +
                            "    <path class=\"logo-sd-4\" d=\"M124.84,82.11q-6.05-11.47-15.41-16.57C104.71,63,98.52,61.07,90,60.45l-8.72,17.3h2q15.66,0,22.74,7.44,7.86,8.28,7.86,23.29,0,9.76-3.3,16.43t-8.49,9.5q-5.19,2.82-16.71,2.82h-7.8V85.08L60.76,118.44l.18,36.3h20.2q17.15,0,24.1-2.31a32.7,32.7,0,0,0,12.92-8.33,41.89,41.89,0,0,0,9.35-15.16,57.23,57.23,0,0,0,3.39-20Q130.9,93.58,124.84,82.11Z\"/>\n" +
                            "</g>\n" +
                            "</svg>"}/>
                    </div>
                    <div className="container-nav">
                        <div className="index-title">
                            <span className="text left-text">are you ready to</span>
                            {/*<span className="text left-text"><i18n.span text={{ key: "are-you-ready-to" }}/></span>*/}
                            <h1>Realize your ideas</h1>
                            {/*<h1><i18n.span text={{ key: "realize-your-ideas" }}/></h1>*/}
                            <span className="text2 right-text">in to something perfected ?</span>
                            {/*<span className="text2 right-text"><i18n.span text={{ key: "in-to-something-perfected" }}/></span>*/}
                        </div>
                        <Link to="/portfolio" className="continue">
                            <span className="continue-text"><i18n.span text={{ key: "press-to-continue" }}/></span>
                        </Link>
                        <ChangeLang/>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}