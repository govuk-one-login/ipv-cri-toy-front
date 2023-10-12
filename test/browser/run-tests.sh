#!/bin/bash

function print_error_exit() {
  printf "\t$0: Error: %s\n\n" "$*" >&2;
  exit 1
}

[ -z "$TEST_REPORT_ABSOLUTE_DIR" ] && print_error_exit "TEST_REPORT_ABSOLUTE_DIR variable not set"

[ -d "$TEST_REPORT_ABSOLUTE_DIR" ] || mkdir -p "$TEST_REPORT_ABSOLUTE_DIR"

REPORT_DIR="${TEST_REPORT_ABSOLUTE_DIR:=$PWD}"
echo "here'${REPORT_DIR}'"

npm run test:browser



