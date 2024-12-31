# JavaScript_basic

Repository with small examples introducing the programming language and web development in JavaScript, basic level.

## How to Run

### Termux (Android):
1. **Open the Termux app**.
2. **Update and install required packages** using the following commands:
   ```bash
   apt update && apt upgrade
   pkg install busybox
   pkg install git
   git clone https://github.com/Hatoridev/JavaScript_basico.git
   cd JavaScript_basico
   ```

3. **Navigate to the desired directory**:
   ```bash
   cd aula01  # or aula02, aula03, etc.
   ```

4. **Start the web server**:
   ```bash
   busybox httpd -p 8000 -h .
   ```

5. **If port 8000 is already in use**:
   - Identify the process using the port:
     ```bash
     lsof -i :8000
     ```
     **Example Output**:
     ```bash
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME
     busybox  12345  username  7u  IPv4  123456  0t0    TCP *:8000 (LISTEN)
     ```
   - Kill the process (replace `12345` with the actual PID):
     ```bash
     kill -9 12345
     ```
   - **As a last resort**, stop all `busybox` processes:
     ```bash
     pkill busybox
     ```

6. **Open the page in your browser**:
   - **For specific files** (e.g., `file.html`):
     ```
     http://localhost:8000/file.html
     ```
   - **For `index.html` files** (no need to specify the file):
     ```
     http://localhost:8000
     ```
   - To access from another device, replace `localhost` with the device IP:
     ```
     http://<your-device-ip>:8000/file.html
     ```

### Windows:
1. **Install Git**:
   Download and install [Git for Windows](https://gitforwindows.org/).

2. **Clone the repository and navigate to the directory**:
   ```bash
   git clone https://github.com/Hatoridev/JavaScript_basico.git
   cd JavaScript_basico
   ```

3. **Start a simple HTTP server** using a web server like XAMPP or WampServer:
   - **XAMPP**:
     - Place the contents of the `aula01`, `aula02`, etc., directories in the `htdocs` folder.
     - Start Apache from the XAMPP control panel.
   - **WampServer**:
     - Place the directories in the `www` folder.
     - Start the WampServer service.

4. **If port 8000 is already in use**:
   - Identify the process using the port:
     ```bash
     netstat -ano | findstr :8000
     ```
     **Example Output**:
     ```bash
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME
     busybox  12345  username  7u  IPv4  123456  0t0    TCP *:8000 (LISTEN)
     ```
   - Kill the process (replace `12345` with the actual PID):
     ```bash
     taskkill /PID 12345 /F
     ```

5. **Open the page in your browser**:
   - **For specific files** (e.g., `file.html`):
     ```
     http://localhost:8000/file.html
     ```
   - **For `index.html` files** (no need to specify the file):
     ```
     http://localhost:8000
     ```

### Debian/Linux:
1. **Install required packages**:
   ```bash
   sudo apt update && sudo apt upgrade
   sudo apt install busybox
   sudo apt install git
   git clone https://github.com/Hatoridev/JavaScript_basico.git
   cd JavaScript_basico
   ```

2. **Navigate to the desired directory**:
   ```bash
   cd aula01  # or aula02, aula03, etc.
   ```

3. **Start the web server**:
   ```bash
   busybox httpd -p 8000 -h .
   ```

4. **If port 8000 is already in use**:
   - Identify the process using the port:
     ```bash
     lsof -i :8000
     ```
     **Example Output**:
     ```bash
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME
     busybox  12345  username  7u  IPv4  123456  0t0    TCP *:8000 (LISTEN)
     ```
   - Kill the process (replace `12345` with the actual PID):
     ```bash
     kill -9 12345
     ```
   - **As a last resort**, stop all `busybox` processes:
     ```bash
     pkill busybox
     ```

5. **Open the page in your browser**:
   - **For specific files** (e.g., `file.html`):
     ```
     http://localhost:8000/file.html
     ```
   - **For `index.html` files** (no need to specify the file):
     ```
     http://localhost:8000
     ```
   - To access from another device, use the IP:
     ```
     http://<your-device-ip>:8000/file.html
     ```

### Languages

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="60" alt="HTML logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="60" alt="CSS logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="60" alt="JavaScript logo" />
</div>
