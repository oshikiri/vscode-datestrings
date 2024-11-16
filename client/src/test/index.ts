import * as path from "path";
import * as Mocha from "mocha";
import * as glob from "glob";

export async function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: "bdd",
    color: true,
  });
  mocha.timeout(100000);

  const testsRoot = __dirname;

  const files: string[] = await glob.glob("**.test.js", { cwd: testsRoot });

  // Add files to the test suite
  files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

  mocha.run((failures) => {
    if (failures > 0) {
      return new Error(`${failures} tests failed.`);
    }
  });

  return;
}
