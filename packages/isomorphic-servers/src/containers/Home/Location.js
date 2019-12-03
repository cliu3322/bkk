import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import LeafletMap from '@iso/containers/Map/Leaflet/LeafletMap';
import infoWindowImg2 from '@iso/assets/images/image3.jpg';
import Radio, { RadioGroup } from '@iso/components/uielements/radio';
import { InputSearch } from '@iso/components/uielements/input';

import fetch from 'node-fetch';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: [0, 0],
      selectValue: 'correct',
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({
          currentPosition: [pos.coords.latitude, pos.coords.longitude],
        });
      },
      err => console.warn(err.message),
      { enableHighAccuracy: true }
    );
  }

  onRadioChange = e => {
    if (e.target.value === 'correct')
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.setState({
            currentPosition: [pos.coords.latitude, pos.coords.longitude],
          });
        },
        err => console.warn(err.message),
        { enableHighAccuracy: true }
      );
    this.setState({ selectValue: e.target.value });
  };

  render() {
    const customHtmlMarker = [
      {
        position: this.state.currentPosition,
        html: `
          <MarkerWrapper class="marker-icon-wrapper">
            <i class="ion-flame" />
          </MarkerWrapper>`,
        className: 'marker-icon',
        popupText: `
          <div class="isoInfoWindowImage">
            <img src=${infoWindowImg2} alt="" />
          </div>
          <div class="isoInfoWindowDetails">
            <h3>Washington Square Village</h3>
          </div>`,
      },
    ];

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <LayoutContentWrapper>
        <Box title={<IntlMessages id="Is this your location?" />}>
          <ContentHolder>
            <ContentHolder>
              <RadioGroup
                onChange={this.onRadioChange}
                value={this.state.selectValue}
              >
                <Radio style={radioStyle} value="correct">
                  Yes, this is my location.
                </Radio>
                <Radio style={radioStyle} value="enter">
                  No, I want enter my address
                </Radio>
                {this.state.selectValue === 'enter' && (
                  <InputSearch
                    placeholder="input search text"
                    enterButton
                    onSearch={async value => {
                      //https://itnext.io/an-alternative-to-google-geocoder-api-in-node-js-78728c7b9faa
                      const params = new URLSearchParams({
                        q: value,
                        limit: '3',
                        format: 'json',
                      });
                      const ENDPOINT = `https://nominatim.openstreetmap.org/search?${params.toString()}`;
                      fetch(ENDPOINT)
                        .then(res => res.json())
                        .then(res =>
                          this.setState({
                            currentPosition: [res[0].lat, res[0].lon],
                          })
                        )
                        .catch(err => console.log(err));

                      //console.log(result)
                    }}
                  />
                )}
                <Radio style={radioStyle} value="drop">
                  No, I want drag the mark on the map
                </Radio>
              </RadioGroup>
            </ContentHolder>
            <LeafletMap
              id="map-with-custom-markers"
              htmlMarkerList={customHtmlMarker}
              draggable={this.state.selectValue === 'drop'}
            />
          </ContentHolder>
        </Box>
      </LayoutContentWrapper>
    );
  }
}
