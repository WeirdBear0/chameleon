import React from 'react';
import Footer from '../home-components/footer'
import Font from '../home-components/font';
import Navbar from '../components/Navbar';
import '../Home.css';
import styles from './farmbeat.module.css'
import microbit1 from './farmbeat-pics/microbit-1.jpg'
import farmbeat1 from './farmbeat-pics/farmbeats-1.jpg'

const SIMPLE_CODE = `reading = 0

def on_forever():
    global reading
    reading = pins.analog_read_pin(AnalogPin.P0)
    led.plot_bar_graph(reading, 1023)
    if input.button_is_pressed(Button.A):
        basic.show_number(reading)

basic.forever(on_forever)`

const ADVANCED_CODE = `import datalogger

# Constants for reading sensor and battery saving
led.enable(True)
MAX_MOISTURE = 1023  # Minimum analog value (dry)
MIN_MOISTURE = 0     # Maximum analog value (wet)
TOO_DRY_THRESHOLD = 40.0  # Moisture percentage below which soil is too dry
TOO_WET_THRESHOLD = 80.0  # Moisture percentage above which soil is too wet
TEMP = 0.0
# Time constants
ONE_MINUTE_MS = 60000
MEASUREMENT_INTERVAL_MS = 15 * ONE_MINUTE_MS  # 15-minute interval for readings

# Initialize datalogger with headers
datalogger.include_timestamp(FlashLogTimeStampFormat.MINUTES)
datalogger.set_columns(["temperature", "moisture"])

def read_soil_moisture():
    """
    Reads the analog value from the soil sensor and returns
    the percentage of moisture.
    """
    raw_value = pins.analog_read_pin(AnalogPin.P1)  # Use pin0 directly
    moisture_percentage = 100 - ((raw_value - MAX_MOISTURE) * 100 / (MIN_MOISTURE - MAX_MOISTURE))
    return moisture_percentage

def log_data(moisture):
    """
    Logs data using the datalogger.
    """
    datalogger.log(
        datalogger.create_cv("temperature", input.temperature()),
        datalogger.create_cv("moisture", moisture),
    )

def get_timestamp():
    """
    Returns a simple timestamp in minutes since the micro:bit was powered on.
    """
    milliseconds = input.running_time()  # Correct function name
    minutes = milliseconds // 60000
    return minutes

def display_moisture_status(moisture):
    """
    Continuously displays a face based on the moisture level.
    - Custom sad face if soil is too dry (< 40%)
    - Custom happy face if moisture is optimal (40% <= moisture <= 80%)
    - Custom symbol if soil is too wet (> 80%)
    """
    if moisture < TOO_DRY_THRESHOLD:
        # Custom sad face
        basic.show_icon(IconNames.SAD)
    elif moisture > TOO_WET_THRESHOLD:
        # Custom droplet shape for too wet
        basic.show_icon(IconNames.NO)
    else:
        # Custom happy face
        basic.show_icon(IconNames.HAPPY)

def save_moisture_reading():
    """
    Reads soil moisture, logs the data with a timestamp,
    and updates the display with the current moisture status.
    """
    moisture = read_soil_moisture()
    timestamp = get_timestamp()
    TEMP = int(input.temperature())
    log_data(moisture)
    display_moisture_status(moisture)

while True:
    # Save a reading and update the display every 15 minutes
    save_moisture_reading()

    # Go to sleep for 15 minutes to conserve battery
    basic.pause(MEASUREMENT_INTERVAL_MS)  # Use sleep correctly`

function Farmbeat() {
  return (
    <div className="App">
      <Font />
      <Navbar />
      <div className={styles.farmbeatContent}>
        <div className={styles.container}>
          <div className={styles.text}>
            <p className={styles.textTitle}>what is a micro:bit?</p>
            <p className={styles.textContent}>
              micro:bit is a small, programmable device featuring a 5x5 LED matrix for visual output,
              two programmable buttons, and an accelerometer and compass for motion and orientation
              sensing. our use case utilizes a soil moisture sensor which triggers visual output on
              the micro:bit.
            </p>
          </div>
          <div className={styles.graphic}>
            <img className={styles.img} src={microbit1} alt="micro:bit device" />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.graphicbeat}>
            <img className={styles.img} src={farmbeat1} alt="Farmbeat project" />
          </div>
          <div className={styles.textTwo}>
            <p className={styles.textTitle}>introducing farmbeat</p>
            <p className={styles.textContent}>
              the farmbeat is a tool that integrates software and ai with relatively simple hardware
              to aid data analysis with respect to agriculture. it is also an education initiative
              designed to teach students the basics of electronics, data construction, and,
              ultimately, ai.
            </p>
          </div>
          <div className={styles.graphicMob}>
            <img className={styles.img} src={farmbeat1} alt="Farmbeat project" />
          </div>
        </div>

        <div className={styles.givecontainer}>
          <div className={styles.text}>
            <p className={styles.textTitle}>project instructions</p>

            <article className={styles.giveInstructions}>
              <h2 className={styles.docHeading}>Overview</h2>
              <p className={styles.docParagraph}>
                For this simple Chameleon project, you will be setting up a digital soil prong
                powered by a BBC micro:bit. The goal of this project is to grow an assortment of
                microgreens and lentils. The soil prong will provide you when to water the plants
                you set up &amp; will locally collect moisture, light, and temperature data for
                Team Chameleon to study. Once the project is over, you can then upload the file
                onto a Google Form, which we will use to optimize our curriculum and environmental
                understanding.
              </p>

              <h2 className={styles.docHeading}>Seed Prep</h2>
              <p className={styles.docParagraph}>
                Inside the tote bag you received, there will be a small parchment paper pouch,
                tied with twine. Untie this pouch with caution, since there are many small seeds
                inside. The seeds are an assortment of lentils, and before they can be planted in
                dirt, they need to be soaked overnight. Place the seeds in a container of water
                and let it sit for 8 hours. After this, the seeds are ready to be planted.
              </p>

              <h2 className={styles.docHeading}>Soil Prep</h2>
              <p className={styles.docParagraph}>
                For the soil and pot setup, anything will suffice. As long as your pot is big
                enough to hold the soil prong, it’ll support the seeds too. Soil that is most like
                garden dirt is optimal, and dirt with wood chips or stones should try to be
                avoided.
              </p>

              <h2 className={styles.docHeading}>Micro:bit Setup</h2>
              <ol className={styles.docList}>
                <li>Take out battery pack and insert two batteries inside</li>
                <li>
                  Unfold cardstock battery sleeve and follow folding steps specified on the front
                </li>
                <li>
                  Once the battery sleeve is on, take out the micro:bit and the Kritonik soil
                  moisture prong
                </li>
                <li>Grab three screws and three bolts from the bag</li>
                <li>
                  Insert the screws into the corresponding holes on the micro:bit and the prong
                  labeled P1, 3V and GND
                </li>
                <li>
                  Once these are secured, use the empty holes on the cardstock sleeve to secure
                  the microbit to the battery pack
                </li>
                <li>
                  Grab the dangling wire from the battery pack and insert it into the large white
                  port on the left of the micro:bit
                </li>
                <li>
                  Write code at{' '}
                  <a
                    href="https://makecode.microbit.org/#editor"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.docLink}
                  >
                    makecode.microbit.org/#editor
                  </a>
                  *
                </li>
                <li>
                  Connect the micro:bit to your computer using the included micro USB cable.
                  Accept the request to mount to your computer. In the MakeCode editor, click the
                  “Download” option which will walk you through the rest of the process.
                </li>
                <li>Here is the code for the simple version:</li>
              </ol>

              <pre className={styles.docCode}>
                <code>{SIMPLE_CODE}</code>
              </pre>

              <ol className={styles.docList} start={11}>
                <li>
                  Here is the advanced code that is capable of saving data to your micro:bit’s
                  flash memory:
                </li>
              </ol>

              <pre className={styles.docCode}>
                <code>{ADVANCED_CODE}</code>
              </pre>

              <ol className={styles.docList} start={12}>
                <li>Download code off the makeCode platform</li>
                <li>
                  Insert your soil moisture sensor into a houseplant or some samples you gather
                  and watch the magic happen!
                </li>
              </ol>

              <p className={styles.docNote}>
                (all readings from 0-1023 are in microvolts (mV) signifying the conductivity of
                your soil)
              </p>

              <h2 className={styles.docHeading}>*Micro:bit Code</h2>
              <p className={styles.docParagraph}>
                No coding or applications need to be installed in order to program your micro:bit.
                Instead, microsoft makecode will be used and all data collected by your micro:bit
                setup will be downloaded locally.
              </p>

              <p className={styles.docParagraph}>
                Example:{' '}
                <a
                  href="https://makecode.microbit.org/_CVKezXgyudzb"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.docLink}
                >
                  https://makecode.microbit.org/_CVKezXgyudzb
                </a>
              </p>
            </article>
          </div>
          <div className={styles.doc} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Farmbeat;
